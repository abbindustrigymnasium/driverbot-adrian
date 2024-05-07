
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const main_theme: CustomThemeConfig = {
    name: 'maintheme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "238 238 238",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #00ADB5 
		"--color-primary-50": "217 243 244", // #d9f3f4
		"--color-primary-100": "204 239 240", // #cceff0
		"--color-primary-200": "191 235 237", // #bfebed
		"--color-primary-300": "153 222 225", // #99dee1
		"--color-primary-400": "77 198 203", // #4dc6cb
		"--color-primary-500": "0 173 181", // #00ADB5
		"--color-primary-600": "0 156 163", // #009ca3
		"--color-primary-700": "0 130 136", // #008288
		"--color-primary-800": "0 104 109", // #00686d
		"--color-primary-900": "0 85 89", // #005559
		// secondary | #222831 
		"--color-secondary-50": "222 223 224", // #dedfe0
		"--color-secondary-100": "211 212 214", // #d3d4d6
		"--color-secondary-200": "200 201 204", // #c8c9cc
		"--color-secondary-300": "167 169 173", // #a7a9ad
		"--color-secondary-400": "100 105 111", // #64696f
		"--color-secondary-500": "34 40 49", // #222831
		"--color-secondary-600": "31 36 44", // #1f242c
		"--color-secondary-700": "26 30 37", // #1a1e25
		"--color-secondary-800": "20 24 29", // #14181d
		"--color-secondary-900": "17 20 24", // #111418
		// tertiary | #393E46 
		"--color-tertiary-50": "225 226 227", // #e1e2e3
		"--color-tertiary-100": "215 216 218", // #d7d8da
		"--color-tertiary-200": "206 207 209", // #cecfd1
		"--color-tertiary-300": "176 178 181", // #b0b2b5
		"--color-tertiary-400": "116 120 126", // #74787e
		"--color-tertiary-500": "57 62 70", // #393E46
		"--color-tertiary-600": "51 56 63", // #33383f
		"--color-tertiary-700": "43 47 53", // #2b2f35
		"--color-tertiary-800": "34 37 42", // #22252a
		"--color-tertiary-900": "28 30 34", // #1c1e22
		// success | #84cc16 
		"--color-success-50": "237 247 220", // #edf7dc
		"--color-success-100": "230 245 208", // #e6f5d0
		"--color-success-200": "224 242 197", // #e0f2c5
		"--color-success-300": "206 235 162", // #ceeba2
		"--color-success-400": "169 219 92", // #a9db5c
		"--color-success-500": "132 204 22", // #84cc16
		"--color-success-600": "119 184 20", // #77b814
		"--color-success-700": "99 153 17", // #639911
		"--color-success-800": "79 122 13", // #4f7a0d
		"--color-success-900": "65 100 11", // #41640b
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #D41976 
		"--color-error-50": "249 221 234", // #f9ddea
		"--color-error-100": "246 209 228", // #f6d1e4
		"--color-error-200": "244 198 221", // #f4c6dd
		"--color-error-300": "238 163 200", // #eea3c8
		"--color-error-400": "225 94 159", // #e15e9f
		"--color-error-500": "212 25 118", // #D41976
		"--color-error-600": "191 23 106", // #bf176a
		"--color-error-700": "159 19 89", // #9f1359
		"--color-error-800": "127 15 71", // #7f0f47
		"--color-error-900": "104 12 58", // #680c3a
		// surface | #495a8f 
		"--color-surface-50": "228 230 238", // #e4e6ee
		"--color-surface-100": "219 222 233", // #dbdee9
		"--color-surface-200": "210 214 227", // #d2d6e3
		"--color-surface-300": "182 189 210", // #b6bdd2
		"--color-surface-400": "128 140 177", // #808cb1
		"--color-surface-500": "73 90 143", // #495a8f
		"--color-surface-600": "66 81 129", // #425181
		"--color-surface-700": "55 68 107", // #37446b

        //Use For Gradient
        //Header Color
		"--color-surface-800": "0 173 181", // #2c3656
       // "--color-surface-800": "38 89 110", //#2b3740
        
		"--color-surface-900": "36 44 70", // #242c46

        
		
	}
}