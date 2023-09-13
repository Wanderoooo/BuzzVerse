import DashBoard from '@/components/display/Dashboard'
import '@/styles/globals.css'

export class Message {
  constructor(text, time, author) {
      this.text = text;
      this.time = time;
      this.author = author;
  }
}

export class MessagingServer {
  constructor(name, icon, memberList, channels) {
    this.name = name;
    this.icon = icon;
    this.memberList = memberList;
    this.channels = channels;
  }
}

export class Friend {
  constructor(name, user) {
    this.name = name;
    this.user = user;
  }
}

export default function App({ Component, pageProps }) {
  return <Component{...pageProps} />
}
