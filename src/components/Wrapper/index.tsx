import React ,{ ReactNode }from 'react';
import './style.less'

export default function Wrapper({ children }:{children:ReactNode}) {
	return <div className='wrapperstyle'>{children}</div>;
}
