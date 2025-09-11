import { CompanionFeedbackDefinitions } from '@companion-module/base'
import type { KXWellInstance } from './main.js'

export function UpdateFeedbacks(self: KXWellInstance): void {
	const feedbacks: CompanionFeedbackDefinitions = {}

	self.setFeedbackDefinitions(feedbacks)
}
