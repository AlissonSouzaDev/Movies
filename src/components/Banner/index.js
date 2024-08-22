import styles from './Banner.module.css'

function Banner({ img }) {
    return(
        <div 
            className={styles.banner}
            style={{ backgroundImage: `url(${require(`./images/banner-${img}.png`)})` }}
        ></div>
    );
}

export default Banner;