export default function LoadingIndicator() {

    const messages: string[] = ['React', 'Re: React', 'Re:Re: React'];

    return (
        <div>
            {
                messages.length > 0 && <h2>You have {messages.length} unread messages</h2>
            }
        </div>
    )
}
