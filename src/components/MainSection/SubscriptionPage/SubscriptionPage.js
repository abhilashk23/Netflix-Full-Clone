import React from 'react'
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import { BsPhone, BsTabletLandscape } from "react-icons/bs";
import { CgLaptop } from "react-icons/cg";
import {FiMonitor} from "react-icons/fi";
import Tab from '@material-ui/core/Tab';
import './SubscriptionPage.css'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={4}>
            <Typography style={{fontSize:"18px",fontWeight:"300" , marginLeft: "-35%", fontFamily:"Arial, Helvetica, sans-serif"}}>{children}</Typography>
          </Box>
        )}
      </div>
    );
}
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  

function SubscriptionPage() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <div className="subscriptionPage">
            <div className="subscription__wrapper">
                <div className="subscription__Details">
                    <h1>Choose The Plan that's right for you</h1>
                    <p> <i className="fas fa-check theme-color" /> Watch all you want. Ad-free.</p>
                    <p> <i className="fas fa-check theme-color" /> Recommendations Just for you.</p>
                    <p> <i className="fas fa-check theme-color" /> Change or cancel your plan anytime.</p>
                </div>
                <div className="subscription__plans">
                    <div className="subscription__plan">
                        <h3>Monthly Price</h3>
                        <h3>Video quality</h3>
                        <h3>Resolution</h3>
                        <h3>Devices you can use to watch</h3>
                    </div>
                    <div className="subscription_">
                        <AppBar position="static" color="transparent" style={{alignItems:'center', marginTop:'-28%' , marginRight:'5%'}}>
                            <Tabs value={value} onChange={handleChange} TabIndicatorProps={{style: {backgroundColor: "#f40612"}}}>
                                <Tab style={{fontFamily:"Arial, Helvetica, sans-serif", fontSize:"15px", color:"white"}} label="Mobile" />
                                <Tab style={{fontFamily:"Arial, Helvetica, sans-serif", fontSize:"15px", color:"white"}} label="Basic" />
                                <Tab style={{fontFamily:"Arial, Helvetica, sans-serif", fontSize:"15px", color:"white"}} label="Standard" />
                                <Tab style={{fontFamily:"Arial, Helvetica, sans-serif", fontSize:"15px", color:"white"}} label="Premium" />
                            </Tabs>
                        </AppBar>
                        <TabPanel value={value} index={0} className="text_content" style={{marginLeft:"1%", textAlign: "center"}}> 
                            <div className="subscription__plan1">
                                <p>₹ 199</p>
                                <p>Good</p>
                                <p>480p</p>
                                <p><BsPhone className="theme-color"/></p>
                                <p><BsTabletLandscape className="theme-color"/></p>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={1} className="text_content" style={{marginLeft:"17%", textAlign: "center"}}>
                            <div className="subscription__plan1">
                                <p>₹ 499</p>
                                <p>Good</p>
                                <p>480p</p>
                                <p><BsPhone className="theme-color"/></p>
                                <p><BsTabletLandscape className="theme-color"/></p>
                                <p><CgLaptop className="theme-color"/></p>
                                <p><FiMonitor className="theme-color"/></p>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={2} className="text_content" style={{marginLeft:"33%", textAlign: "center"}}>
                            <div className="subscription__plan1">
                                <p>₹ 649</p>
                                <p>Better</p>
                                <p>1080p</p>
                                <p><BsPhone className="theme-color"/></p>
                                <p><BsTabletLandscape className="theme-color"/></p>
                                <p><CgLaptop className="theme-color"/></p>
                                <p><FiMonitor className="theme-color"/></p>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={3} className="text_content" style={{marginLeft:"48%", textAlign: "center"}}>
                            <div className="subscription__plan1">
                                <p>₹ 799</p>
                                <p>Best</p>
                                <p>4K + HDR</p>
                                <p><BsPhone className="theme-color"/></p>
                                <p><BsTabletLandscape className="theme-color"/></p>
                                <p><CgLaptop className="theme-color"/></p>
                                <p><FiMonitor className="theme-color"/></p>
                            </div>
                        </TabPanel>
                    </div>
                    <div className="submission">
                        <p style={{marginLeft: '-3%'}}>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all <br/> content is available in all resolutions. See our Terms of Use for more details.</p>
                        <p >Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, <br/> and 1 with Basic and Mobile.</p>
                        <button className="subscription__button">Continue</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubscriptionPage
