export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-darknavy">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-white mb-2">Signing you in...</h2>
        <p className="text-muted-foreground">Please wait while we complete the authentication process.</p>
      </div>
    </div>
  )
}

