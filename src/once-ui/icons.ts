import { IconType } from 'react-icons';

import {
	HiChevronUp,
	HiChevronDown,
	HiChevronRight,
	HiChevronLeft,
	HiArrowUpRight,
	HiOutlineArrowPath,
	HiCheck,
	HiMiniQuestionMarkCircle,
	HiMiniUser,
	HiMiniXMark,
	HiOutlineLink,
	HiExclamationTriangle,
	HiInformationCircle,
	HiExclamationCircle,
	HiCheckCircle,
	HiEnvelope,
	HiCommandLine,
	HiBriefcase,
	HiOutlineSun,
	HiOutlineMoon,
} from "react-icons/hi2";

import {
	FaGithub,
	FaLinkedin,
	FaXTwitter,
	FaNewspaper
} from "react-icons/fa6";

export const iconLibrary: Record<string, IconType> = {
	chevronUp: HiChevronUp,
    chevronDown: HiChevronDown,
	chevronRight: HiChevronRight,
	chevronLeft: HiChevronLeft,
	refresh: HiOutlineArrowPath,
	arrowUpRight: HiArrowUpRight,
	check: HiCheck,
	helpCircle: HiMiniQuestionMarkCircle,
	infoCircle: HiInformationCircle,
	warningTriangle: HiExclamationTriangle,
	errorCircle: HiExclamationCircle,
	checkCircle: HiCheckCircle,
	person: HiMiniUser,
	close: HiMiniXMark,
	openLink: HiOutlineLink,
	github: FaGithub,
	linkedin: FaLinkedin,
	x: FaXTwitter,
	email: HiEnvelope,
	code: HiCommandLine,
	briefcase: HiBriefcase,
	light: HiOutlineSun,
	dark: HiOutlineMoon,
	cv: FaNewspaper,
};