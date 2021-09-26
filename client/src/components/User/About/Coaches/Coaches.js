import React from 'react'
import './style.css'
import coach1img from './coach1.jpg'
import coach2img from './coach2.jpg'
import coach3img from './coach3.jpg'
import coach4img from './coach4.jpg'

const Coaches = () => {
    return (
        <>
         {/* whole coaches wrapper */}
            <div className="coachcontainer">
                <div className="cheading">
                    <h3>Our Coaches</h3>
                </div>

                <div className="coachesinfo">
                {/* coach1 info */}
                    <div className="coachinfo">
                        <div className="coachimg">
                            <img src={coach1img} alt="John Mario" />
                        </div>
                        <div className="coachname">
                            <h2>Daniel Cobb </h2>
                        </div>
                        <div className="coachabout">
                            <p>
                                Daniel Cobb is the Program Director. He has been training private clients and teaching group exercise classes since 2004. He began his coaching career as a self-defense and fitness instructor at the Krav Maga National Training Center in Los Angeles. Initially working exclusively with body-weight exercise and kettlebells, he soon incorporated barbell training by following workouts on CrossFit.com. Over the last 15+ years Mario has completed numerous certifications, collecting an alphabet soup of abbreviations: NASM CPT, NASM CES, WKC, RKC and SFG 1 and 2, USAW, CF L1, CFBB, CF Gymnastics, FMS, RYT200/500, and most recently the FRC and WMQ. Mario has developed strength and conditoning programs for professional athletes and helped housewives and dadbods get ready for bathing suit season. His passion is in exploring natural movement and helping others learn to reclaim their freedom to move like human animals--crawl, lift, carry, and run without pain or limitation.
                            </p>
                        </div>
                    </div>
                    
                    {/* coach2 info */}
                    <div className="coachinfo">
                        <div className="coachimg">
                            <img src={coach2img} alt="Daniel" />
                        </div>
                        <div className="coachname">
                            <h2>John Mario</h2>
                        </div>
                        <div className="coachabout">
                            <p>
                                John Mario his training in 1999 with traditional martial arts. Looking for a focused direction into physical development, he delved into the strength and conditioning applicable to marital arts and injury based corrective protocol. After training in Olympic lifting, powerlifting, boxing, Muay Thai, ju jitsu, and teaching blacksmithing for years, John has joined the ranks at MVMNT, coaching group classes, working with individual clients, and continuing his self-training.
                            </p>
                        </div>
                    </div>
                </div>

                {/* //Another coachdiv flex */}
                <div className="coachesinfo">
                {/* coach3 info */}
                    <div className="coachinfo">
                        <div className="coachimg">
                            <img src={coach3img} alt="John Mario" />
                        </div>
                        <div className="coachname">
                            <h2>Kim Jennie </h2>
                        </div>
                        <div className="coachabout">
                            <p>
                            Kim Jennie was exposed to functional movements and the importance of technique at a young age. In January of 2014, she received her RKC Level I Certification and quickly took to teaching fitness classes in Cartersville, Georgia. While a student at Life University, she led group fitness classes otherwise known as “Kettlebell Movement.” Upon graduating, Canaan has trained clients online to help people move in functional ways with limited equipment. Now, Canaan trains to live a functional, active lifestyle and pushes her limits to see what she is capable of. If anything, training has taught her the importance of grit, self-love, passion, and determination.
                            </p>
                        </div>
                    </div>
                    
                    {/* coach4 info */}
                    <div className="coachinfo">
                        <div className="coachimg">
                            <img src={coach4img} alt="Daniel" />
                        </div>
                        <div className="coachname">
                            <h2>Mario Carlomagno</h2>
                        </div>
                        <div className="coachabout">
                            <p>
                            Mario Carlomagno is a former Army soldier, where he first discovered his love for fitness and helping others achieve their fitness goals. After his military service he enrolled in college and is set to graduate soon with a degree in Exercise Physiology and Human Performance from Life University. He has aspirations to continue his work in Strength and Conditioning as well. Nate has a background in competitive golf, lacrosse, and CrossFit. Nate has worked with professional rugby players and individuals from all backgrounds. He holds current certifications as a CrossFit Level 1 coach, USAW Sports Performance Coach level 2, and is pending receiving his NSCA Certified Strength and Conditioning Specialist certificate.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Coaches
