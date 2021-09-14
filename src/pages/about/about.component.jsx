import React, { useEffect } from 'react';

function About() {

    useEffect(() => {
        window.scroll(0,0);
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>About Us</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at est vitae libero finibus placerat. Maecenas arcu mauris, accumsan ac tincidunt ut, eleifend a massa. Duis in tristique mauris, quis efficitur tellus. Duis sem metus, semper non tincidunt eget, porttitor a ligula. Vestibulum laoreet at orci non blandit. Aliquam tempor fringilla metus, sed porttitor ante porta ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas elementum ornare lectus eu venenatis. Donec commodo ligula laoreet facilisis egestas. In sodales eget mauris nec condimentum. Maecenas eleifend euismod vulputate. Mauris et massa accumsan, convallis mi vel, varius urna. Nam pulvinar condimentum lacus at imperdiet.
                        <br/>
                        <br/>
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam commodo, diam quis ornare tincidunt, est enim accumsan massa, nec tempor ipsum magna sed purus. Donec eget tristique eros. Donec accumsan tempus ipsum, eget porta sapien consequat non. Morbi at consequat urna. Nullam sit amet elit luctus, bibendum urna vitae, porta felis. Vestibulum at urna ipsum. Cras varius, orci eget varius molestie, massa metus dapibus dolor, sed facilisis risus ipsum porttitor urna. Proin laoreet, sem non venenatis dapibus, eros arcu fermentum neque, ut dictum erat arcu quis dolor. Donec facilisis lectus at dui aliquet vulputate. Mauris vehicula ac ipsum accumsan sollicitudin.
                        <br/>
                        <br/>
                        Proin ante orci, imperdiet non enim at, vulputate commodo massa. Donec fringilla luctus nulla nec pulvinar. Duis id molestie libero. Vestibulum sed tincidunt nisl. Nulla vitae porta nulla. Duis tincidunt consequat faucibus. Curabitur orci justo, rutrum ac ornare eget, lacinia ac erat. Curabitur tristique pulvinar imperdiet. Maecenas ullamcorper eget velit consectetur malesuada. Etiam aliquam pretium augue a ultricies.
                        <br/>
                        <br/>
                        Vestibulum vehicula malesuada augue, nec congue eros placerat aliquam. Ut sit amet enim sodales, tincidunt sapien sit amet, vestibulum nisi. Donec consequat tempor odio a blandit. Vivamus feugiat ac ipsum non laoreet. Proin sollicitudin facilisis lorem, id pulvinar lorem luctus a. Pellentesque facilisis convallis tortor. Ut feugiat lacus id metus pretium pellentesque.
                        <br/>
                        <br/>
                        Curabitur tempor sagittis enim, pharetra porta ipsum ornare nec. Nam consequat egestas viverra. Aenean dapibus gravida elementum. Vestibulum quis diam lorem. Proin lacinia lobortis felis placerat lacinia. Maecenas vestibulum sapien eget fermentum iaculis. Aliquam id sagittis odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam pretium justo ante, at cursus lectus lacinia nec. Nam viverra, orci ut tincidunt tincidunt, nisl quam fermentum neque, sed ultrices nunc lectus sit amet orci. Nam sollicitudin condimentum ante, eu blandit felis posuere in. In neque ligula, laoreet nec finibus eu, consequat at lectus. Nam quis ligula quis ex porttitor lacinia.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;