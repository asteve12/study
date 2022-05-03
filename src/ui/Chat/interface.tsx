interface chat{
    handleChatPage:()=>void
    username:string,
    img:string,
    unread:number,
    latestMsg?:any
    
}

export default chat;