import Card from "../UI/Card"
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as RxIcons from 'react-icons/rx'
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
const Contact = () => {


  const [isCopiedState, setIsCopiedState] = useState(false);
  const email = 'email@todayisfun.com'
  const copyHandler = (copyEvent) => {
    copyEvent.preventDefault();
    return (
      alert('copied')
    )
    
  }
  return (
    <div>
    <h2>Contact</h2>
      <Card>
        <ul>
          <li>
            <FaIcons.FaGithub />
            <a href="https://github.com/hajschroeder/react-music-tutor-beta">Github</a>
          </li>
          <li>
            <div>
            <MdIcons.MdAlternateEmail />
            <CopyToClipboard text={email} onCopy={()=> setIsCopiedState(true)}>
              <a href={email} onClick={copyHandler}>email</a>
            </CopyToClipboard>
              {/* <RxIcons.RxCopy /> */}
            </div>

          </li>
        </ul>
      </Card>
    </div>
    )
}

export default Contact