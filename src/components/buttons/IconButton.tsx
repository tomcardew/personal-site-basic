import { StyleSheet, css } from 'aphrodite'
import { CONSTANTS } from '../../utils'

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: CONSTANTS.COLORS.primary,
        width: 50,
        borderRadius: '100%',
        margin: 10,
        cursor: 'pointer',
        alignSelf: 'flex-end'
    },
    darkContainer: {
        backgroundColor: CONSTANTS.COLORS.primaryDark
    },
    icon: {
        height: 30,
        width: 30,
        objectFit: 'contain',
        margin: 10
    }
})

interface IIconButton {
    icon: string,
    darkMode?: boolean,

    onClick?: () => void
}

const IconButton = ({ icon, darkMode = false, onClick = () => {} }: IIconButton) => {
    return (
        <div onClick={onClick} className={css(styles.container, darkMode ? styles.darkContainer : null)}>
            <img className={css(styles.icon)} src={icon} alt="icon" />
        </div>
    )
}

export default IconButton