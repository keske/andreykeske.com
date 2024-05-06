
import {
  Button,
  Checkbox,
  CheckboxGroup,
  FormControlLabel,
  Input,
  Stack,
  Text,
  theme,
} from '@material-bank/ds-uikit';
import { ArrowLeft24Icon } from '@material-bank/mb-icons';

import { CarbonImpactProgramLeftSide } from 'modules/carbon-impact-program/components/CarbonImpactProgramLeftSide';
import { ReactElement } from 'react';

const CarbonImpactProgramFormPage = () => (
  <Stack direction="row">
    <CarbonImpactProgramLeftSide />
    <Stack sx={{ height: '100vh', width: '50vw' }}>
      <Stack direction="row" sx={{ p: 2 }}>
        <Button startIcon={<ArrowLeft24Icon />} variant="ghost">
          Back
        </Button>
      </Stack>
      <Stack sx={{ alignItems: 'center' }}>
        <Stack sx={{ width: '70%' }}>
          <Stack gap={8}>
            <Stack>
              <Text variant="title3">Request a CEU presentation</Text>
              <Text>Become a sustainable design change maker!</Text>
            </Stack>
            <Stack gap={6}>
              <Stack direction="row" gap={4}>
                <Input placeholder="First name" required variant="ghost" />
                <Input placeholder="Last name" required variant="ghost" />
              </Stack>
              <Stack direction="row" gap={4}>
                <Input placeholder="Work email" required variant="ghost" />
                <Input placeholder="Job title" required variant="ghost" />
              </Stack>
              <Stack direction="row" gap={4}>
                <Input placeholder="Company name" required variant="ghost" />
                <Input placeholder="Office location" required variant="ghost" />
              </Stack>
              <Input
                placeholder="Industry association (If applicable)"
                variant="ghost"
              />
            </Stack>
            <Stack gap={2}>
              <Text sx={{ fontWeight: theme.fontWeights.bold }}>
                CEU(s) of interest:
              </Text>
              <CheckboxGroup gap={1}>
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    (<Text>
                      <Text sx={{ fontWeight: theme.fontWeights.bold }}>
                        Course 1:
                      </Text>{' '}
                      How Much Carbon is Embodied In Your Interiors?
                    </Text>)
                  }
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    (<Text>
                      <Text sx={{ fontWeight: theme.fontWeights.bold }}>
                        Course 2:
                      </Text>{' '}
                      Demystifying Sustainability Certifications & the Common
                      Materials Framework: Part 1
                      <Text
                        sx={{
                          bg: theme.colors.cardOverlay,
                          borderRadius: 'xl',
                          color: theme.colors.primary,
                          fontSize: 10,
                          ml: 1,
                          px: 1,
                          py: 2,
                        }}
                      >
                        Available in May 2024
                      </Text>
                    </Text>)
                  }
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    (<Text>
                      <Text sx={{ fontWeight: theme.fontWeights.bold }}>
                        Course 2:
                      </Text>{' '}
                      Demystifying Sustainability Certifications & the Common
                      Materials Framework: Part 2
                      <Text>Available in May 2024</Text>
                    </Text>)
                  }
                />
              </CheckboxGroup>
              <Text
                sx={{
                  color: theme.colors.secondaryText,
                  fontSize: 12,
                  lineHeight: theme.lineHeights.label,
                }}
              >
                *Available in Atlanta, Austin, Boston, Chicago, Dallas, Houston,
                LA, Orange County, San DiegoAll other cities for in-person
                presentations might be accommodated on special request
              </Text>
            </Stack>
            <Stack>
              <Input
                placeholder="Enter preferred date (If applicable)"
                variant="ghost"
              />
              <Text>
                <Text>Get prepared!</Text> Share a free Material Bank membership
                link with your expected CEU attendees. All attendees should be
                Material Bank members. Free membership is open to professional
                in the architecture and design industry.
              </Text>
            </Stack>
          </Stack>
          <Button>Submit</Button>
        </Stack>
      </Stack>
    </Stack>
  </Stack>
);

CarbonImpactProgramFormPage.getLayout = (page: ReactElement) => page;

export default CarbonImpactProgramFormPage;
