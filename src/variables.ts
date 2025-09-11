import type { CompanionVariableDefinition } from '@companion-module/base'

import type { KXWellInstance } from './main.js'

export function UpdateVariableDefinitions(self: KXWellInstance): void {
	const variables: CompanionVariableDefinition[] = []

	self.setVariableDefinitions(variables)
}
