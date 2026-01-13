import { combineRgb, CompanionPresetDefinitions } from '@companion-module/base'
import { KXWellInstance } from './main.js'
import { ICONS } from './icons.js'

export function UpdatePresets(self: KXWellInstance): void {
	const presets: CompanionPresetDefinitions = {}

	const colorWhite = combineRgb(255, 255, 255)
	const colorBlack = combineRgb(0, 0, 0)
	const colorRed = combineRgb(255, 0, 0)
	const colorGrey = combineRgb(51, 51, 51)

	// PAN/TILT
	presets['pan-left'] = {
		type: 'button',
		category: 'Pan/Tilt',
		name: 'Pan Left',
		style: {
			text: '',
			png64: ICONS.LEFT,
			pngalignment: 'center:center',
			size: '18',
			color: colorWhite,
			bgcolor: colorBlack,
		},
		steps: [{ down: [{ actionId: 'panLeft', options: { speed: 30 } }], up: [{ actionId: 'panStop', options: {} }] }],
		feedbacks: [],
	}

	presets['pan-right'] = {
		type: 'button',
		category: 'Pan/Tilt',
		name: 'Pan Right',
		style: {
			text: '',
			png64: ICONS.RIGHT,
			pngalignment: 'center:center',
			size: '18',
			color: colorWhite,
			bgcolor: colorBlack,
		},
		steps: [{ down: [{ actionId: 'panRight', options: { speed: 30 } }], up: [{ actionId: 'panStop', options: {} }] }],
		feedbacks: [],
	}

	presets['tilt-up'] = {
		type: 'button',
		category: 'Pan/Tilt',
		name: 'Tilt Up',
		style: {
			text: '',
			png64: ICONS.UP,
			pngalignment: 'center:center',
			size: '18',
			color: colorWhite,
			bgcolor: colorBlack,
		},
		steps: [{ down: [{ actionId: 'tiltUp', options: { speed: 30 } }], up: [{ actionId: 'tiltStop', options: {} }] }],
		feedbacks: [],
	}

	presets['tilt-down'] = {
		type: 'button',
		category: 'Pan/Tilt',
		name: 'Tilt Down',
		style: {
			text: '',
			png64: ICONS.DOWN,
			pngalignment: 'center:center',
			size: '18',
			color: colorWhite,
			bgcolor: colorBlack,
		},
		steps: [{ down: [{ actionId: 'tiltDown', options: { speed: 30 } }], up: [{ actionId: 'tiltStop', options: {} }] }],
		feedbacks: [],
	}

		// PAN + TILT (DIAGONALS)
	presets['up-left'] = {
		type: 'button',
		category: 'Pan/Tilt',
		name: 'Up Left',
		style: {
			text: '',
			png64: ICONS.UP_LEFT,
			pngalignment: 'center:center',
			size: '18',
			color: colorWhite,
			bgcolor: colorBlack,
		},
		steps: [
			{
				down: [
					{ actionId: 'panLeft', options: { speed: 30 } },
					{ actionId: 'tiltUp', options: { speed: 30 } },
				],
				up: [
					{ actionId: 'panStop', options: {} },
					{ actionId: 'tiltStop', options: {} },
				],
			},
		],
		feedbacks: [],
	}

	presets['up-right'] = {
		type: 'button',
		category: 'Pan/Tilt',
		name: 'Up Right',
		style: {
			text: '',
			png64: ICONS.UP_RIGHT,
			pngalignment: 'center:center',
			size: '18',
			color: colorWhite,
			bgcolor: colorBlack,
		},
		steps: [
			{
				down: [
					{ actionId: 'panRight', options: { speed: 30 } },
					{ actionId: 'tiltUp', options: { speed: 30 } },
				],
				up: [
					{ actionId: 'panStop', options: {} },
					{ actionId: 'tiltStop', options: {} },
				],
			},
		],
		feedbacks: [],
	}

	presets['down-left'] = {
		type: 'button',
		category: 'Pan/Tilt',
		name: 'Down Left',
		style: {
			text: '',
			png64: ICONS.DOWN_LEFT,
			pngalignment: 'center:center',
			size: '18',
			color: colorWhite,
			bgcolor: colorBlack,
		},
		steps: [
			{
				down: [
					{ actionId: 'panLeft', options: { speed: 30 } },
					{ actionId: 'tiltDown', options: { speed: 30 } },
				],
				up: [
					{ actionId: 'panStop', options: {} },
					{ actionId: 'tiltStop', options: {} },
				],
			},
		],
		feedbacks: [],
	}

	presets['down-right'] = {
		type: 'button',
		category: 'Pan/Tilt',
		name: 'Down Right',
		style: {
			text: '',
			png64: ICONS.DOWN_RIGHT,
			pngalignment: 'center:center',
			size: '18',
			color: colorWhite,
			bgcolor: colorBlack,
		},
		steps: [
			{
				down: [
					{ actionId: 'panRight', options: { speed: 30 } },
					{ actionId: 'tiltDown', options: { speed: 30 } },
				],
				up: [
					{ actionId: 'panStop', options: {} },
					{ actionId: 'tiltStop', options: {} },
				],
			},
		],
		feedbacks: [],
	}

	// ZOOM
	presets['zoom-in'] = {
		type: 'button',
		category: 'Lens',
		name: 'Zoom In',
		style: {
			text: 'Zoom In',
			size: '14',
			color: colorWhite,
			bgcolor: colorBlack,
		},
		steps: [{ down: [{ actionId: 'zoomIn', options: { speed: 30 } }], up: [{ actionId: 'zoomStop', options: {} }] }],
		feedbacks: [],
	}

	presets['zoom-out'] = {
		type: 'button',
		category: 'Lens',
		name: 'Zoom Out',
		style: {
			text: 'Zoom Out',
			size: '14',
			color: colorWhite,
			bgcolor: colorBlack,
		},
		steps: [{ down: [{ actionId: 'zoomOut', options: { speed: 30 } }], up: [{ actionId: 'zoomStop', options: {} }] }],
		feedbacks: [],
	}

	// FOCUS
	presets['focus-near'] = {
		type: 'button',
		category: 'Lens',
		name: 'Focus Near',
		style: {
			text: 'Focus Near',
			size: '14',
			color: colorWhite,
			bgcolor: colorBlack,
		},
		steps: [
			{ down: [{ actionId: 'focusNear', options: { speed: 20 } }], up: [{ actionId: 'focusStop', options: {} }] },
		],
		feedbacks: [],
	}

	presets['focus-far'] = {
		type: 'button',
		category: 'Lens',
		name: 'Focus Far',
		style: {
			text: 'Focus Far',
			size: '14',
			color: colorWhite,
			bgcolor: colorBlack,
		},
		steps: [{ down: [{ actionId: 'focusFar', options: { speed: 20 } }], up: [{ actionId: 'focusStop', options: {} }] }],
		feedbacks: [],
	}

	// IRIS
	presets['iris-increase'] = {
		type: 'button',
		category: 'Exposure',
		name: 'Iris Up',
		style: {
			text: 'Iris +',
			size: '14',
			color: colorWhite,
			bgcolor: colorBlack,
		},
		steps: [{ down: [{ actionId: 'irisIncrease', options: { amount: 1 } }], up: [] }],
		feedbacks: [],
	}

	presets['iris-decrease'] = {
		type: 'button',
		category: 'Exposure',
		name: 'Iris Down',
		style: {
			text: 'Iris -',
			size: '14',
			color: colorWhite,
			bgcolor: colorBlack,
		},
		steps: [{ down: [{ actionId: 'irisDecrease', options: { amount: 1 } }], up: [] }],
		feedbacks: [],
	}

	// PRESETS (1–6)
	for (let i = 1; i <= 6; i++) {
		const id = i.toString()
		const recallAction = { actionId: 'presetRecall', options: { preset: i } }
		const storeAction = { actionId: 'presetSave', options: { preset: i } }

		presets[`preset-${id}`] = {
			type: 'button',
			category: 'Presets',
			name: `Preset ${id}`,
			style: {
				text: `Preset\\n${id}`,
				size: '14',
				color: colorWhite,
				bgcolor: colorGrey,
			},
			steps: [
				{
					down: [recallAction],
					up: [],
					2000: {
						// Execute the actions after 2s while the button is held or only after it is released
						options: { runWhileHeld: true },
						actions: [storeAction],
					},
				},
			],
			feedbacks: [],
		}
	}

	// POWER
	presets['power-toggle'] = {
		type: 'button',
		category: 'System',
		name: 'Toggle Power',
		style: {
			text: 'Power',
			size: '14',
			color: colorWhite,
			bgcolor: colorRed,
		},
		steps: [{ down: [{ actionId: 'power', options: { state: '1' } }], up: [] }],
		feedbacks: [],
	}

	self.setPresetDefinitions(presets as CompanionPresetDefinitions)
}
