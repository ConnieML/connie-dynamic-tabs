import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class CustomInterface extends Component {

    constructor() {
        super();

        this.state = {
            currentTab: 0,
            prefillPhone: ''
        }
    }

    dispatchIframe() {
        // return { __html: `<iframe class="airtable-embed" src="https://airtable.com/embed/shrVTU8uyYD6nXuuq?backgroundColor=blue&layout=card&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="${window.innerHeight}" style="background: transparent; border: 1px solid #ccc;"><iframe>` }
        return { __html: `<iframe class="airtable-embed" src="https://v1.connie.plus" frameborder="0" onmousewheel="" width="100%" height="${window.innerHeight}" style="background: transparent; border: 1px solid #ccc;"><iframe>` }
    }
    
    intakeIframe () {
        // return { __html: `<iframe class="airtable-embed" src="https://airtable.com/embed/shrVTU8uyYD6nXuuq?backgroundColor=blue&layout=card&viewControls=on" width="100%" height="${window.innerHeight}"><iframe>` }
        return { __html: `<iframe class="airtable-embed" src="https://airtable.com/embed/shrVTU8uyYD6nXuuq?backgroundColor=blue&layout=card&viewControls=on" width="100%" height="${window.innerHeight}"><iframe>` }
    }

    donationDistribution () {
        // return { __html: `<iframe class="airtable-embed" src="https://airtable.com/embed/appXyXOHlD7rqJJLr/shrgV3sX54wr5dktD?backgroundColor=blue&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="${window.innerHeight}" style="background: transparent; border: 1px solid #ccc;"><iframe>` }
        return { __html: `<iframe class="airtable-embed" src="https://cbocrm.org/admin" frameborder="0" onmousewheel="" width="100%" height="${window.innerHeight}" style="background: transparent; border: 1px solid #ccc;"><iframe>` }
    }

    hubspotIframe () {
        return { __html: `<iframe class="airtable-embed" src="https://app.hubspot.com/contacts/46308290/contacts/list/view/all/" frameborder="0" onmousewheel="" width="100%" height=${window.innerHeight}" style="background: transparent; border: 1px solid #ccc;"><iframe>` }
    }

    formsIframe () {
        return { __html: `<iframe class="airtable-embed" src="https://airtable.com/embed/shrww4Ej1FLEwhW6c?backgroundColor=red&prefill_Phone=${this.state.prefillPhone}" frameborder="0" onmousewheel="" width="100%" height=${window.innerHeight}" style="background: transparent; border: 1px solid #ccc;"><iframe>` }
    }

    componentWillReceiveProps (props) {

        if (props.task) {
            let tabIndex = parseInt(props.task.attributes.callType) - 1;

            this.setState({
                currentTab: tabIndex,
                prefillPhone: props.task.attributes.name
            });
        }
        console.log('Our task: ', this.props.task);
    }

    changeTab (tabIndex) {
        this.setState({
            currentTab: tabIndex
        })
    }

    render() {
        return(
            <Tabs selectedIndex={this.state.currentTab} onSelect={(tabIndex) => this.changeTab(tabIndex)} >
                <TabList>
                    <Tab>Connie +</Tab>
                    <Tab>H2H Website</Tab>
                    <Tab>Clients</Tab>
                    <Tab>Partners</Tab>
                    <Tab>Tools</Tab>
                </TabList>
                <TabPanel>
                    <div dangerouslySetInnerHTML={this.dispatchIframe()} />
                </TabPanel>
                <TabPanel>
                    <div dangerouslySetInnerHTML={this.intakeIframe()} />
                </TabPanel>
                <TabPanel>
                    <div dangerouslySetInnerHTML={this.donationDistribution()} />
                </TabPanel>
                <TabPanel>
                    <div dangerouslySetInnerHTML={this.hubspotIframe()} />
                </TabPanel>
                <TabPanel>
                    <div dangerouslySetInnerHTML={this.formsIframe()} />
                </TabPanel>

            </Tabs>
        );
    }
}

export default CustomInterface;