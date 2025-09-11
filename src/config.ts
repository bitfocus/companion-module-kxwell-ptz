import type { SomeCompanionConfigField } from '@companion-module/base'

export interface ModuleConfig {
	ip: string
	port: number
	address: number
	verbose: boolean
}

export function GetConfigFields(): SomeCompanionConfigField[] {
	return [
		{
			type: 'static-text',
			id: 'info',
			width: 12,
			label: 'Information',
			value: 'This module communicates with KXWell PTZ cameras over IP.',
		},
		{
			type: 'textinput',
			id: 'ip',
			width: 4,
			label: 'IP Address',
			default: '127.0.0.1',
		},
		{
			type: 'number',
			id: 'port',
			width: 4,
			label: 'Port',
			default: 6000,
			min: 1,
			max: 65535,
			required: true,
		},
		{
			type: 'number',
			id: 'address',
			width: 4,
			label: 'Camera Address',
			default: 1,
			min: 1,
			max: 255,
			required: true,
		},
		{
			type: 'static-text',
			id: 'hr1',
			width: 12,
			label: ' ',
			value: '<hr />',
		},
		{
			type: 'checkbox',
			id: 'verbose',
			label: 'Enable Verbose Logging',
			default: false,
			width: 4,
		},
	]
}
