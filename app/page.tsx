'use client'

import React from "react";
import AInformation from "@/components/home/AInformation";
import Banner from "@/components/home/Banner";
import LatestEvents from "@/components/home/LatestEvents";
import DivisionData from "@/components/home/DivisionData";

export default function MainContent() {

	return (
		<div className="overflow-hidden relative">

			<div className="xl:pb-20 pb-32 relative">
				<div className="container px-8 relative z-0">
					<Banner></Banner>
				</div>
			</div>

			<div className="bg-dark-blue upper-diagonal-right-bottom">
				<div className="container relative px-8">
					<AInformation></AInformation>
				</div>
			</div>

			<div className="bg-degrade-green upper-diagonal-right-bottom">
				<div className="container relative px-8">
					<LatestEvents></LatestEvents>
				</div>
			</div>

			<div className="bg-degrade-black upper-diagonal-right-bottom">
				<div className="container relative px-8">
					<DivisionData></DivisionData>
				</div>
			</div>

		</div>
	);
}