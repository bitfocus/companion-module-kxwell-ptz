import { CompanionActionDefinitions } from '@companion-module/base'
import type { KXWellInstance } from './main.js'
import { twoDigit, SendCommand } from './api.js'

export function UpdateActions(self: KXWellInstance): void {
	const actions: CompanionActionDefinitions = {}

	actions.panLeft = {
		name: 'Pan Left',
		options: [
			{
				type: 'number',
				id: 'speed',
				label: 'Speed (1-49)',
				default: 30,
				min: 1,
				max: 49,
			},
		],
		callback: async (action) => {
			const speed = Number(action.options.speed)
			SendCommand(self, 'P', twoDigit(speed))
		},
	}

	actions.panRight = {
		name: 'Pan Right',
		options: [
			{
				type: 'number',
				id: 'speed',
				label: 'Speed (1-49)',
				default: 30,
				min: 1,
				max: 49,
			},
		],
		callback: async (action) => {
			const speed = 100 - Number(action.options.speed)
			SendCommand(self, 'P', twoDigit(speed))
		},
	}

	actions.panStop = {
		name: 'Pan Stop',
		options: [],
		callback: () => {
			SendCommand(self, 'P', '50')
		},
	}

	actions.tiltUp = {
		name: 'Tilt Up',
		options: [
			{
				type: 'number',
				id: 'speed',
				label: 'Speed (1-49)',
				default: 30,
				min: 1,
				max: 49,
			},
		],
		callback: async (action) => {
			const speed = 100 - Number(action.options.speed)
			SendCommand(self, 'T', twoDigit(speed))
		},
	}

	actions.tiltDown = {
		name: 'Tilt Down',
		options: [
			{
				type: 'number',
				id: 'speed',
				label: 'Speed (1-49)',
				default: 30,
				min: 1,
				max: 49,
			},
		],
		callback: async (action) => {
			const speed = 100 - Number(action.options.speed)
			SendCommand(self, 'T', twoDigit(speed))
		},
	}

	actions.tiltStop = {
		name: 'Tilt Stop',
		options: [],
		callback: () => {
			SendCommand(self, 'T', '50')
		},
	}

	// ZOOM
	actions.zoomIn = {
		name: 'Zoom In',
		options: [
			{
				type: 'number',
				id: 'speed',
				label: 'Speed (1-49)',
				default: 30,
				min: 1,
				max: 49,
			},
		],
		callback: async (action) => {
			const speed = 100 - Number(action.options.speed)
			SendCommand(self, 'Z', twoDigit(speed))
		},
	}
	
	actions.zoomOut = {
		name: 'Zoom Out',
		options: [
			{
				type: 'number',
				id: 'speed',
				label: 'Speed (1-49)',
				default: 20,
				min: 1,
				max: 49,
			},
		],
		callback: async (action) => {
			const speed = Number(action.options.speed)
			SendCommand(self, 'Z', twoDigit(speed))
		},
	}

	actions.zoomStop = {
		name: 'Zoom Stop',
		options: [],
		callback: () => {
			SendCommand(self, 'Z', '50')
		},
	}

	// FOCUS
	actions.focusNear = {
		name: 'Focus Near',
		options: [
			{
				type: 'number',
				id: 'speed',
				label: 'Speed (1-49)',
				default: 25,
				min: 1,
				max: 49,
			},
		],
		callback: async (action) => {
			const speed = Number(action.options.speed)
			SendCommand(self, 'F', twoDigit(speed))
		},
	}

	actions.focusFar = {
		name: 'Focus Far',
		options: [
			{
				type: 'number',
				id: 'speed',
				label: 'Speed (1-49)',
				default: 25,
				min: 1,
				max: 49,
			},
		],
		callback: async (action) => {
			const speed = 100 - Number(action.options.speed)
			SendCommand(self, 'F', twoDigit(speed))
		},
	}

	actions.focusStop = {
		name: 'Focus Stop',
		options: [],
		callback: () => {
			SendCommand(self, 'F', '50')
		},
	}

	// IRIS
	actions.irisModeAuto = {
		name: 'Set Iris Mode: Auto',
		options: [],
		callback: () => {
			SendCommand(self, 'D', '31') // D1 = '3', D2 = '1'
		},
	}

	actions.irisModeManual = {
		name: 'Set Iris Mode: Manual',
		options: [],
		callback: () => {
			SendCommand(self, 'D', '30') // D1 = '3', D2 = '0'
		},
	}

	actions.irisIncrease = {
		name: 'Iris Increase',
		options: [
			{
				type: 'number',
				id: 'amount',
				label: 'Amount (1-16)',
				default: 1,
				min: 1,
				max: 16,
			},
		],
		callback: async (action) => {
			const val = Math.max(1, Math.min(16, Number(action.options.amount))) - 1
			const hex = val.toString(16).toUpperCase()
			SendCommand(self, 'B', `+${hex}`)
		},
	}

	actions.irisDecrease = {
		name: 'Iris Decrease',
		options: [
			{
				type: 'number',
				id: 'amount',
				label: 'Amount (1-16)',
				default: 1,
				min: 1,
				max: 16,
			},
		],
		callback: async (action) => {
			const val = Math.max(1, Math.min(16, Number(action.options.amount))) - 1
			const hex = val.toString(16).toUpperCase()
			SendCommand(self, 'B', `-${hex}`)
		},
	}

	// PRESETS
	actions.presetSave = {
		name: 'Save Preset',
		options: [{ type: 'number', id: 'preset', label: 'Preset #', default: 1, min: 0, max: 99 }],
		callback: async (action) => {
			SendCommand(self, 'M', twoDigit(Number(action.options.preset)))
		},
	}

	actions.presetRecall = {
		name: 'Recall Preset',
		options: [{ type: 'number', id: 'preset', label: 'Preset #', default: 1, min: 0, max: 99 }],
		callback: async (action) => {
			SendCommand(self, 'R', twoDigit(Number(action.options.preset)))
		},
	}

	// POWER
	actions.power = {
		name: 'Power On/Off',
		options: [
			{
				type: 'dropdown',
				id: 'state',
				label: 'Power',
				default: '1',
				choices: [
					{ id: '1', label: 'On' },
					{ id: '0', label: 'Off' },
				],
			},
		],
		callback: async (action) => {
			SendCommand(self, 'O', String(action.options.state))
		},
	}

	self.setActionDefinitions(actions)
}
