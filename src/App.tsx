import React, {useState} from 'react';
// @ts-ignore
import styles from './App.module.css';
import Button, {ButtonType} from "./Components/Button";

const TABS_NAME = [
    {
        key: 'all',
        title: 'All',
    },
    {
        key: 'primary',
        title: 'primary',
    },
    {
        key: 'secondary',
        title: 'secondary',
    },
]
export const App = () => {

    const [isActive, setActive] = useState(true)
    // let active = true
    // active = false

  return (
      <div className={styles.app}>
          {isActive && <Button type={ButtonType.Primary} title={'Primary'} onClick={() => alert('Primary')}/>}
          <Button type={ButtonType.Secondary} title={'FALSE'} onClick={() => setActive(false)} />
          <Button type={ButtonType.Error} title={'TRUE'} onClick={() => setActive(true)} />
          {TABS_NAME.map((tab) => <div key={tab.key}>{tab.title}</div>)}
      </div>
  );
}
export default App;
