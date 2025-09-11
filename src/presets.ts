import {
	type CompanionButtonPresetDefinition,
	type CompanionTextPresetDefinition,
	type CompanionPresetDefinitions,
} from '@companion-module/base'

import type { KXWellInstance } from './main.js'

export function UpdatePresets(self: KXWellInstance): void {
	const presets: (CompanionButtonPresetDefinition | CompanionTextPresetDefinition)[] = []

	self.setPresetDefinitions(presets as unknown as CompanionPresetDefinitions)
}
