import Image from 'next/image';

// Images
import up from '../assets/up.svg';
import down from '../assets/down.svg';
import add from '../assets/add.svg';

const Overview = () => {
    return (
        <div className="overview">
            <div className="overview__account">
                <h3>Account</h3>
                <button>
                    <Image
                        src={add}
                        width={20}
                        height={20}
                        alt="Set account"
                    />
                </button>
            </div>

            <div className="overview__tracked">
               <h3>Assets Tracked</h3> 
               <p>0</p>
               <button>
                    <Image
                        src={add}
                        width={20}
                        height={20}
                        alt="Add token"
                    />
               </button>
            </div>

            <div className="overview__total">
               <h3>Total Value</h3> 
               <p>$0.00</p>
            </div>

            <div className="overview__change">
               <h3>% Change</h3> 
               <p>
                    <Image
                        src={up}
                        width={20}
                        height={20}
                        alt="Change direction"
                    />
                <span className="green">0.0%</span>
               </p>
            </div>
        </div>
    );
}

export default Overview;