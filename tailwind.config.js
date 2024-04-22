/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],

  theme: {
    fontFamily:{
      'sans':['Cairo', 'sans-serif'],
    },
    extend: { 
      container:{center:true,padding: '0',},
      colors:{
        "primary/100":"#FFECF1",
        "primary/500":"#FF5982",
        "primary/700":"#CC4168",
        "secondary/600":"#00A196",
        "secondary/100":"#E0F2F1",
        "secondary/800":"#006971",
        "Neutral/700":"#616161"
      }
    },


  },
  plugins: [],
}