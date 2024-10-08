import { useEffect } from "react"
import { Toaster, toast } from 'sonner';

export const ErrorDisplay = () => {
  useEffect(() => {
    const url = new URL(window.location.href)
    const error = url.searchParams.get('error')
    if (error) {
      toast.error(error)
      url.searchParams.delete('error')
      window.history.replaceState({}, '', url.toString())
    }
  }, [])

  return <Toaster richColors position="top-center" />
}