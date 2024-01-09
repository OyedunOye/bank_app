import { card } from "../assets"
import styles, {layout} from "../style"
import Button from "./Button"

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden"/> in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Create an account with us by providing a few of your personal details,this includes
        automatic agreement to personal info processing policy. Set up a valid password, and that's all. You can now enjoy all the 
        cool features made specially for your comfort!
      </p>
      <Button styles='mt-10' />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
      
    </section>
  )

export default CardDeal