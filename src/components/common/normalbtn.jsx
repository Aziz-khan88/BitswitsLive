
"use client";

const NormalBtn = ({ link, text, bgcolor, txtcolor }) => {
    // Chat Code
    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
            $zopim.livechat.window.show();
        }
    };
    return (
        <div className="normalButton" style={{ background: bgcolor }} onClick={handleChatOpen}>
            <div className="linksBtn" style={{ color: txtcolor }}>{text}</div>
        </div >
    )
}

export default NormalBtn