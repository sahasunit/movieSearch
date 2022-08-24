/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		maxHeight: {
			full: "100%",
		},
		waxWidth: {
			full: "100%",
		},
		spacing: {
			10: "10px",
			15: "15px",
			20: "20px",
			30: "30px",
			50: "50px",
			70: "70px",
			100: "100px",
			130: "130px",
			150: "150px",
			200: "200px",
			250: "250px",
			300: "300px",
			350: "350px",
		},
		fontSize: {
			10: "10px",
			12: "12px",
			14: "14px",
			16: "16px",
			18: "18px",
			20: "20px",
			40: "40px",
		},
		extend: {
			colors: {
				gray: "#505050",
				textGray: "#F5F5F5",
				lightGray: "#BEBEBE",
				darkGray: "#808080",
			},
		},
	},
	plugins: [],
};
