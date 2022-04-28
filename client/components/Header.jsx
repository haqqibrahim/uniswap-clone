import React, { useState, useEffect, useContext } from 'react'
import Image from 'next/image'
import { FiArrowUpRight } from 'react-icons/fi'
import { AiOutlineDown } from 'react-icons/ai'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import ethLogo from "../assets/eth.png"
import uniswapLogo from "../assets/uniswap.png"
import { TransactionContext } from '../context/TransactionContext'

const style = {
	wrapper: `p-4 w-screen flex justify-between items-center`,
	headerLogo: `flex w-1/4 justify-start items-center`,
	nav: `flex flex-1 justify-center items-center`,
	navItemsContainer: `flex bg-[#191B1F] rounded-3xl`,
	navItem: `px-4 flex py-2 m-1 items-center text-lg cursor-pointer rounded-3xl font-semibold text-[0.9rem]`,
	activeNavItem: `bg-[#20242A]`,
	buttonsContainer: `flex justify-end items-center w-1/4`,
	button: `flex items-center bg-[#191B1F] rounded-2xl mx-2 cursor-pointer font-semibold text-[0.9rem]`,
	buttonPadding: `p-2`,
	buttonTextContainer: `h-8 flex items-center`,
	buttonIconContainer: `w-8 h-8 flex items-center justify-center`,
	buttonAccent: `bg-[#172A42] border border-[#163252] hover:border-[#234169] h-full rounded-2xl flex items-center justify-center text-[#4F90EA]`,
}

const Header = () => {
	const [selectedNav, setSelectedNav] = useState('swap');
	const { connectWallet, currentAccount } = useContext(TransactionContext);
	return (
		<div className={style.wrapper}>
			<div className={style.headerLogo}>
				<Image src={uniswapLogo} alt="uniswap" height={40} width={40} />
			</div>
			<div className={style.nav}>
				<div className={style.navItemsContainer}>
					<div onClick={() => setSelectedNav('swap')}
						className={`${style.navItem} ${selectedNav === 'swap' && style.activeNavItem}`}>
						Swap
					</div>
					<div onClick={() => setSelectedNav('pool')}
						className={`${style.navItem} ${selectedNav === 'pool' && style.activeNavItem}`}>
						Pool
					</div>
					<div onClick={() => setSelectedNav('vote')}
						className={`${style.navItem} ${selectedNav === 'vote' && style.activeNavItem}`}>
						Vote
					</div>
					<a href="https://info.uniswap.org/#/"
						target="_blank"
						rel="noreferrer"
					>
						<div className={style.navItem}>
							Charts<FiArrowUpRight />
						</div>
					</a>
				</div>
			</div>
			<div className={style.buttonsContainer}>
				<div className={`${style.button} ${style.buttonPadding}`}>
					<div className={style.buttonIconContainer}>
						<Image src={ethLogo} alt="eth logo" height={20} width={20} />
					</div>
					<p>Ethereum</p>
					<div className={style.buttonIconContainer}>
						<AiOutlineDown />
					</div>
				</div>
				{currentAccount ? (
					<div className={`${style.button} ${style.buttonPadding}`}>
						<div className={style.buttonTextContainer}>0x888...25</div>
					</div>
				) : (
					<div
						onClick={() => connectWallet()}
						className={`${style.button} ${style.buttonPadding}`}
					>
						<div className={`${style.buttonAccent} ${style.buttonPadding}`}>
							Connect Wallet
						</div>
					</div>
				)}
				<div className={`${style.button} ${style.buttonPadding}`}>
					<div className={`${style.buttonIconContainer} mx-2`}>
						<HiOutlineDotsVertical />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header