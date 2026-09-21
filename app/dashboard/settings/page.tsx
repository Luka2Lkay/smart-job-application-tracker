function SettingsPage() {
    //settings
    return (
        <main className="p-6">
            <div className="mb-8">
                <h1 className="text-3xl font-bold">Settings</h1>
                <p className="mt-2 text-gray-500">Manage your tracker preferences.</p>
            </div>

            <div className="max-w-2xl space-y-6">
                <div className="rounded-xl border p-6">
                    <h2 className="text-lg font-semibold">Profile</h2>
                    <p className="mt-2 text-sm text-gray-500">Authentication and profile settings will be available here.</p>
                </div>

                <div className="rounded-xl border p-6">
                    <h2 className="text-lg font-semibold">Notifications</h2>
                    <p className="mt-2 text-sm text-gray-500">Notification preferences will be available here.</p>
                </div>
            </div>
        </main>
    )
}

export default SettingsPage