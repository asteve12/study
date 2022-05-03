interface chat{
    handleChatPage:()=>void
    username:string,
    img:string,
    unread:number,
    latestMsg?:any,
    receiver:string
    
}

export default chat;