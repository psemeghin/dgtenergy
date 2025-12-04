module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  theme: {
  	extend: {
  		colors: {
  			energy: {
  				green: '#86CB67',
  				blue: '#005F73',
  				gray: '#2F3E46',
  				sand: '#A67F59'
  			},
        petroleum: {
          50: "#e7fffd",
          100: "#c2fff9",
          200: "#8cfff4",
          300: "#3dffec",
          400: "#00ffe7",
          500: "#00f9ff",
          600: "#00c5e3",
          700: "#009bb5",
          800: "#007a90",
          900: "#005f73", // default
          950: "#004255",
        },
        graphite: {
          50: "#f3f8f8",
          100: "#dfecee",
          200: "#c3d9de",
          300: "#99bec7",
          400: "#689aa8",
          500: "#4d7f8d",
          600: "#436977",
          700: "#3b5763",
          800: "#364b54",
          900: "#2f3e46", // default
          950: "#1d292f",
        },
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'var(--font-noto-sans)'
  			],
  			display: [
  				'var(--font-poppins)'
  			]
  		},
  		spacing: {
  			'72': '18rem',
  			'84': '21rem',
  			'96': '24rem',
  			'128': '32rem'
  		},
  		zIndex: {
  			'60': '60',
  			'70': '70',
  			'80': '80',
  			'90': '90',
  			'100': '100'
  		},
  		opacity: {
  			'85': '0.85',
  			'90': '0.90',
  			'95': '0.95'
  		},
  		transitionProperty: {
  			width: 'width',
  			spacing: 'margin, padding'
  		},
  		animation: {
  			fade: 'fade 1s ease-in-out',
  			slowpulse: 'pulse 4s ease-in-out infinite',
  			slideup: 'slideup 0.6s ease-out'
  		},
  		keyframes: {
  			fade: {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			slideup: {
  				'0%': {
  					transform: 'translateY(20px)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
  corePlugins: { preflight: true },
}
