export default function ContactEmail() {
    // generates an encoded string and then at runtime a script decodes the string and displays the email address.
    // this is used in an effort to stop bots from reading the email address and sending spam emails.
    const EMAIL = 'contact@example.com';

    const encodeEmail = (e) => {
        const b = btoa(e);
        let res = [];
        for (let i = 0; i < b.length; i++) {
          res[i] = b.charCodeAt(i).toString();
        } 
        return res.join('-')
    }


    return (
        <>
            <a data-emailaddress={encodeEmail(EMAIL)}
            className="hover:underline hover:text-gray-300">
                <i className="text-gray-400">
                    please wait...
                </i>
            </a>
        </>
    )
}