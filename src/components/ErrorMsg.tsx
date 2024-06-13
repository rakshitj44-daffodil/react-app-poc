interface ErrorMsgProps {
    errorMsg: string
}

export default function ErrorMsg({errorMsg}: ErrorMsgProps) {
  return (
    <div className="text-pink-dark mt-1 text-sm">
        {errorMsg}
    </div>
  )
}
