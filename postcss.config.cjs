const postcssImport = require("postcss-import")
const normalize = require("postcss-normalize")
const mixins = require("postcss-mixins")
const customMedia = require("postcss-custom-media")
const tailwindNesting = require("tailwindcss/nesting")
const tailwind = require("tailwindcss")
const postcssPresetEnv = require("postcss-preset-env");

const config = {
	plugins: [
		postcssImport(normalize),
		mixins,
		customMedia,
		tailwindNesting,
		tailwind,
		postcssPresetEnv({
			features: {
				"nesting-rules": false
			},
			stage: 1
		})
	]
};

module.exports = config;

/*
 
 postcssImport > *
 
 mixins > simpleVars, tailwindNesting
 
 tailwindNesting, tailwind > postcssPresetEnv
 
 postcssPresetEnv -> features: { nesting-rules: false } to disable nesting rules
 and use tailwind nesting rules
 
 */