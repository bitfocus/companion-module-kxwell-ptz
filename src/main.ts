import { InstanceBase, runEntrypoint, type SomeCompanionConfigField } from '@companion-module/base'
import type { TCPHelper } from '@companion-module/base'
import { GetConfigFields, type ModuleConfig } from './config.js'
import { UpgradeScripts } from './upgrades.js'
import { UpdateActions } from './actions.js'
import { UpdateFeedbacks } from './feedbacks.js'
import { UpdateVariableDefinitions } from './variables.js'
import { UpdatePresets } from './presets.js'
import { InitConnection } from './api.js'

export class KXWellInstance extends InstanceBase<ModuleConfig> {
	config!: ModuleConfig // Setup in init()
	socket!: TCPHelper | null
	connected = false
	reconnectInterval: NodeJS.Timeout | undefined = undefined

	data: { [key: string]: any } = {}

	constructor(internal: unknown) {
		super(internal)

		this.socket as TCPHelper | null
	}

	async init(config: ModuleConfig): Promise<void> {
		this.config = config
		this.updateActions() // export actions
		this.updateFeedbacks() // export feedbacks
		this.updateVariableDefinitions() // export variable definitions
		this.updatePresets() // export presets

		await this.initConnection()
	}
	// When module gets deleted
	async destroy(): Promise<void> {
		this.log('debug', 'destroy')
	}

	async configUpdated(config: ModuleConfig): Promise<void> {
		this.config = config
		await this.initConnection()
	}

	// Return config fields for web config
	getConfigFields(): SomeCompanionConfigField[] {
		return GetConfigFields()
	}

	updateActions(): void {
		UpdateActions(this)
	}

	updateFeedbacks(): void {
		UpdateFeedbacks(this)
	}

	updateVariableDefinitions(): void {
		UpdateVariableDefinitions(this)
	}

	updatePresets(): void {
		UpdatePresets(this)
	}

	async initConnection(): Promise<void> {
		await InitConnection(this)
	}
}

runEntrypoint(KXWellInstance, UpgradeScripts)
