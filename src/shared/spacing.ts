const spacing = {
    none: 0,
    tiny: '2px',
    xsmall: '4px',
    small: '8px',
    medium: '16px',
    large: '20px',
    xlarge: '24px',
    xxlarge: '32px',
    xxxlarge: '48px',
    huge: '96px',
};

const aliases = {
    padding: spacing.medium,
    margin: spacing.medium,
    paddingButton: spacing.small,
    /* ====== form spacing @2021-04-27 ====== */
    /* page > section > subsection 
    or page > panel > subsection */
    paddingDialog: '36px 48px 48px 48px',
    paddingForm: '32px 48px 96px 32px',
    paddingSection: 0,
    paddingPanel: 0,
    paddingSubsection: '20px 24px',
    marginSection: '8px 0 24px 0',
    marginPanel: '8px 0 24px 0',
    marginSubsection: '8px 0 0 0',
    marginPanelSubsection: '20px 0 0 0',
    marginFormField: '0 12px 12px 0',
    marginActionButtons: '8px 0 0 0',
    marginFormLabel: '0 0 4px 0',
    marginFormMessage: '8px 0 0 0',
    paddingFormInput: '8px',
    icon: '4px', // icon spacing
};

export default {...spacing, ...aliases}