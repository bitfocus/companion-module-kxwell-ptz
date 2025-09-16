import { InstanceStatus, TCPHelper } from '@companion-module/base'
import type { KXWellInstance } from './main.js'

export async function InitConnection(self: KXWellInstance): Promise<void> {
	const ip = self.config.ip
	const port = self.config.port

	if (self.config.ip && self.config.ip !== '') {
		self.log('debug', `Connecting to Device at ${ip}:${port}`)
		self.updateStatus(InstanceStatus.Connecting, 'Connecting')

		self.socket = new TCPHelper(self.config.ip, port) as TCPHelper | null

		self.socket?.on('connect', () => {
			self.connected = true
			clearInterval(self.reconnectInterval)
			self.updateStatus(InstanceStatus.Ok, 'Connected')
			self.log('info', 'Connected to Device')
			RequestData(self)
		})

		let buffer = ''

		self.socket?.on('data', (data: any) => {
			try {
				buffer += data.toString()
				//if we receive a carriage return, process the buffer and reset it
				if (buffer.endsWith('\r')) {
					ProcessData(self, buffer)
					buffer = ''
				}
			} catch (e) {
				self.log('error', `Error parsing data: ${e}`)
			}
		})

		self.socket?.on('error', (err: any) => {
			self.connected = false
			self.updateStatus(InstanceStatus.UnknownError, 'Connection error')
			self.log('error', `Error: ${err}`)

			if (String(err).indexOf('ECONNREFUSED') > -1) {
				self.socket?.destroy()
				self.socket = null
				self.log('info', 'Connection refused. Will attempt to reconnect in 5 seconds.')
				self.reconnectInterval = setTimeout(() => {
					self.log('info', 'Attempting to reconnect...')
					InitConnection(self)
					self.reconnectInterval = undefined
				}, 5000)
			}
		})
	}
}

function RequestData(self: KXWellInstance): void {
	if (self.connected) {
		// Request initial data here
	} else {
		self.log('warn', 'Unable to request data; Not connected to Device')
	}
}

export function SendCommand(self: KXWellInstance, cmd: string, data: string) {
	const addr = twoDigit(self.config.address)
	const message = `#${addr}${cmd}${data}\r`

	if (self.config.verbose) {
		self.log('debug', `Sending: ${message}`)
	}

	if (self.socket) {
		self.socket.send(message)
	}
}

function ProcessData(self: KXWellInstance, msg: any): void {
	if (self.config.verbose) {
		self.log('debug', `Received data: ${msg}`)
	}

	let variableObj: { [key: string]: string } = {}

	self.setVariableValues(variableObj)
	self.checkFeedbacks()
}

export function twoDigit(val: number): string {
	val = Math.max(1, Math.min(99, val))
	return val.toString().padStart(2, '0')
}