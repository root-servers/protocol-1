import * as React from 'react';
import { Container } from 'ts/components/ui/container';
import { Text } from 'ts/components/ui/text';

export interface IntroOnboardingStepProps {}

export const IntroOnboardingStep: React.StatelessComponent<IntroOnboardingStepProps> = () => (
    <div className="flex items-center flex-column">
        <Text>
            In order to start trading on any 0x relayer in the 0x ecosystem, you need to complete two simple steps.
        </Text>
        <Container width="100%" marginTop="25px" marginBottom="15px" className="flex justify-around">
            <div className="flex flex-column items-center">
                <img src="/images/eth_token.svg" height="50px" width="50x" />
                <Text> Wrap ETH </Text>
            </div>
            <div className="flex flex-column items-center">
                <img src="/images/fake_toggle.svg" height="50px" width="50px" />
                <Text> Unlock tokens </Text>
            </div>
        </Container>
    </div>
);
