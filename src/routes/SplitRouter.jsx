import React, { Suspense } from 'react'
//import FullScreenLoading from "../components/loading/FullScreenLoading";
import Fallback from '../pages/Fallback'

const SplitRouter = ({ children }) => {
	return <Suspense fallback={<Fallback />}>{children}</Suspense>
}

export default SplitRouter
