import React from 'react';
import './Tabs.css'

const transitionTime = 500;
const transitionStyle = `${transitionTime}ms, right ${transitionTime}ms`;

class Tabs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sizes: {}
        }
        this.els = {}
    }
    componentDidMount() {
        this.getSizes()
    }

    getSizes() {
        const rootBounds = this.root.getBoundingClientRect();

        const sizes = {}

        Object.keys(this.els).forEach((key) => {
            const el = this.els[key];
            const bounds = el.getBoundingClientRect();

            const left = bounds.left - rootBounds.left;
            const right = rootBounds.right - bounds.right;

            sizes[key] = { left, right }
        });

        this.setState({ sizes });
        return sizes
    }

    render() {
        return (
            <div
                className="tabs"
                ref={el => this.root = el}
            >
                {React.Children.map(this.props.children, (child, i) => {
                    let className = 'tabs-tab';
                    if (child.key === this.props.active) {
                        className = `${className} tabs-tab--active`
                    }
                    return (
                        <div
                            className={className}
                            onClick={() => {
                                this.props.onChange(child.key)
                            }}
                            ref={el => this.els[child.key] = el}>
                            {child}
                        </div>
                    )
                })}
                <div className="tab-underline"
                    style={this.getUnderlineStyle()} />
            </div>
        );
    };

    getUnderlineStyle() {
        if (this.props.active == null || Object.keys(this.state.sizes).length === 0) {
            return { left: '0', right: '100%' };
        }

        const size = this.state.sizes[this.props.active];

        return {
            left: `${size.left}px`,
            right: `${size.right}px`,
            transition: transitionStyle
        }
    }
}

export default Tabs;