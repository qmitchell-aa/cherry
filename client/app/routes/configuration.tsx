import { Outlet } from '@remix-run/react'
import Sidebar from '~/components/Sidebar'

export default function ConfigurationLayout() {
	return (
		<div className="flex h-full">
			<Sidebar
				title="Configuration"
				items={[{ to: '/configuration/properties', label: 'Properties' }]}
			/>
			<div className="flex-1 overflow-auto p-6">
				<Outlet />
			</div>
		</div>
	)
}
