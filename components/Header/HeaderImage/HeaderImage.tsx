import { JSX, PropsWithChildren } from 'react';
import cn from 'classnames';
import styles from './HeaderImage.module.css';

interface HeaderImageProps {
  imageClass?: string;
}

function HeaderImage(props: Readonly<PropsWithChildren<HeaderImageProps>>): JSX.Element {
  const { imageClass, children } = props;

  if (children) {
    return (
      <>
        <div className={cn(styles.image, 'bg-transparent bg-cover bg-scroll bg-center bg-no-repeat', imageClass)}>{children}</div>
        <div className="h-1 bg-secondary dark:bg-black" />
      </>
    );
  } else {
    return (
      <>
        <div className={cn(styles.image, 'bg-transparent bg-cover bg-scroll bg-center bg-no-repeat', imageClass)}></div>
        <div className="h-1 bg-secondary dark:bg-black" />
      </>
    );
  }
}

export default HeaderImage;
