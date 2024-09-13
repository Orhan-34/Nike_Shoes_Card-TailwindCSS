import { useState } from "react";
import { shoes } from "./assets/index";

function App() {
	const [amount, setAmount] = useState(0);
	const [index, setIndex] = useState(0);
	const incrementAmount = () => {
		setAmount(amount + 1);
	};

	const decrementAmount = () => {
		if (amount > 0) {
			setAmount(amount - 1);
		}
	};

	return (
		<div className="h-screen bg-gradient-to-br from-theme-pink to-theme-blue flex items-center justify-center overflow-hidden">
			<div className=" w-1/2 h-4/5 p-10 relative">
				<div className="border border-gray-100 w-6 h-6 rounded-full absolute left-0 top-0" />
				<div className="w-10 h-10 absolute right-0 top-0">
					<div className="w-full h-full rounded-full absolute left-0 top-0 border border-gray-100" />
					<div className="w-6 h-6 rounded-full absolute left-5 top-5 border-4 border-gray-100" />
				</div>
				<div className="card w-full h-full rounded-2xl bg-gray-100  flex flex-wrap shadow-theme-1">
					<div
						className="left-side w-1/2 bg-gradient-to-bl from-theme-blue to-theme-pink rounded-2xl shadow-theme-2
          transform scale-105"
					>
						<div className="logo w-24 text-white absolute left-6 top-0 ">
							{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
							<svg
								className="fill-current"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512.013 512.013"
							>
								<path d="M287.757 225.794l-31.808 8.352-88.256 23.104c-31.168 7.712-58.432 17.984-84.704 8.992-35.712-15.424-35.072-55.552-8.448-98.24C27.469 206.85-57.235 331.074 57.325 343.618c14.592 1.92 40.576-3.2 68.8-15.072l129.824-53.28 256.064-104.704-224.256 55.232z" />
							</svg>
						</div>
						<div className="big-number absolute -right-12 top-0">
							<span className="text-20xl font-bold leading-none pt-font bg-gradient-to-bl from-theme-blue to-theme-pink text-transparent bg-clip-text text-shadow">
								32
							</span>
						</div>
						<div className="shoe absolute bottom-5 left-0">
							<img
								// src="https://i.ibb.co/HgNtS7C/shoe.png"
								src={shoes[index].image}
								alt="shoe"
								className="transition-all duration-1000 transform-gpu hover:scale-150 hover:-rotate-12"
							/>

							<div className="dots flex justify-center items-center gap-5 relative mt-10">
								{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
								<span
									className={`w-4 h-4 bg-gray-300 hover:bg-white rounded-full block cursor-pointer ${index === 0 ? "bg-white" : ""}`}
									onClick={() => setIndex(0)}
								/>
								{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
								<span
									className={`w-4 h-4 bg-gray-300 hover:bg-white rounded-full block cursor-pointer ${index === 1 ? "bg-white" : ""}`}
									onClick={() => setIndex(1)}
								/>
								{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
								<span
									className={`w-4 h-4 bg-gray-300 hover:bg-white rounded-full block cursor-pointer ${index === 2 ? "bg-white" : ""}`}
									onClick={() => setIndex(2)}
								/>
							</div>
						</div>
					</div>
					<div className="right-side bg-gray-200 w-1/2 h-full rounded-2xl pl-20 pr-8 py-6">
						<div className="relative top-0 left-12">
							<img
								src="https://i.ibb.co/HFpkHLc/text-logo.png"
								className="w-56"
								alt="logo"
							/>
						</div>
						<div className="price">
							<span className="text-4xl font-bold text-gray-600">
								${shoes[index].price}
							</span>
						</div>
						<div className="text mt-5 text-lg text-gray-700 leading-6">
							<p className="">{shoes[index].title}</p>
						</div>
						<div className="shoes-size mt-10">
							<div className="flex flex-col text-xl text-gray-600">
								<div className="size my-4">
									<div className="flex">
										<div className="w-1/3 p-4">Size:</div>
										<div className="w-2/3 p-4 flex gap-5 justify-center">
											<label className="cursor-pointer hover:text-theme-pink duration-300 transform">
												<span>S</span>
												<input type="radio" name="" id="" className="hidden"/>
											</label>
											<label className="cursor-pointer hover:text-theme-pink duration-300 transform">
												<span>M</span>
												<input type="radio" name="" id="" className="hidden" />
											</label>
											<label className="cursor-pointer hover:text-theme-pink duration-300 transform">
												<span>L</span>
												<input type="radio" name="" id="" className="hidden" />
											</label>
											<label className="cursor-pointer hover:text-theme-pink duration-300 transform">
												<span>Xl</span>
												<input type="radio" name="" id="" className="hidden" />
											</label>
											<label className="cursor-pointer hover:text-theme-pink duration-300 transform">
												<span>XXl</span>
												<input type="radio" name="" id="" className="hidden" />
											</label>
										</div>
									</div>
								</div>
								<div className="colour my-4">
									<div className="flex">
										<div className="w-1/3 p-4">Colour:</div>
										<div className="w-2/3 p-4 flex gap-5 justify-center items-center">
											<label className="cursor-pointer hover:text-theme-pink">
												<span className="w-3 h-3 ring ring-green-500 rounded-full flex items-center justify-center">
													<span className="w-2 h-2 bg-green-500 rounded-full  block" />
												</span>
												<input type="radio" name="" id="" className="hidden" />
											</label>
											<label className="cursor-pointer hover:text-theme-pink">
												<span className="w-3 h-3 ring ring-theme-pink rounded-full block" />
												<input type="radio" name="" id="" className="hidden" />
											</label>
											<label className="cursor-pointer hover:ring-current">
												<span className="w-3 h-3 ring ring-yellow-500 rounded-full block" />
												<input type="radio" name="" id="" className="hidden" />
											</label>
										</div>
									</div>
								</div>
								<div className="amount my-4">
									<div className="flex">
										<div className="w-1/3 p-4">Quantity:</div>
										<div className="w-2/3 p-4 flex gap-5 justify-center items-center ">
											{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
											<button
												onClick={() => decrementAmount()}
												className="w-8 h-8 bg-gray-300 text-gray-600 hover:bg-theme-pink transition-all hover:text-white rounded-full"
											>
												-
											</button>
											<span>{amount}</span>
											{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
											<button
												onClick={() => incrementAmount()}
												className="w-8 h-8 bg-gray-300 text-gray-600 hover:bg-theme-pink hover:text-white transition-all rounded-full"
											>
												+
											</button>
										</div>
									</div>
								</div>
								<div className="buy-button mt-14">
									{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
									<button className="w-full h-12  bg-theme-pink  text-white rounded-lg transition-all hover:duration-700 hover:transform-gpu hover:scale-y-90 hover:scale-x-110">
										<span className="flex justify-between px-5">
											Buy Now
											<img
												width="30"
												height="30"
												src="https://img.icons8.com/fluency-systems-regular/50/shopping-basket.png"
												alt="shopping-basket"
											/>
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
