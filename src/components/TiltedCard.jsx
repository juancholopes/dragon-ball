import { useState } from 'react'
import { color, motion } from 'motion/react'

const TiltedCard = () => {
    const [text, setText] = useState(false)

    const containerStyle = {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        color: '#191a1a',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const imgStyle = {
        width: '200px',
        height: '100%',
    }

    const textContainerStyle = {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const titleStyle = {
        color: 'Orange',
        fontSize: '30px',
        textAlign: 'start',
        fontFamily: 'Sayan Sans',
    }

    return (
        <motion.div style={containerStyle}>
            <motion.img
                style={imgStyle}
                whileHover={{ scale: 1.1 }}
                src='https://dragonball-api.com/characters/goku_normal.webp'
            />
            <div style={textContainerStyle}>
                <h1 style={titleStyle}>Goku</h1>
                <p></p>
            </div>
        </motion.div>
    )
    
}

export default TiltedCard