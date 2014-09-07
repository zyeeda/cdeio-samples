define({
    type: 'form-view',
    formName: 'params',
    labelOnTop: true,
    avoidLoadingHandlers: true,
    size: 'small',

    fieldGroups: {
        countryGroup: [
            {name: 'country', label: 'Country', type: 'dropdown', defaultValue: 'USA',
                source: [
                    {id: 'Australia', text: 'Australia'},
                    {id: 'Belgium', text: 'Belgium'},
                    {id: 'Canada', text: 'Canada'},
                    {id: 'Denmark', text: 'Denmark'},
                    {id: 'Finland', text: 'Finland'},
                    {id: 'France', text: 'France'},
                    {id: 'Germany', text: 'Germany'},
                    {id: 'Hong Kong', text: 'Hong Kong'},
                    {id: 'Ireland', text: 'Ireland'},
                    {id: 'Israel', text: 'Israel'},
                    {id: 'Italy', text: 'Italy'},
                    {id: 'Japan', text: 'Japan'},
                    {id: 'Netherlands', text: 'Netherlands'},
                    {id: 'New Zealand', text: 'New Zealand'},
                    {id: 'Norway', text: 'Norway'},
                    {id: 'Philippines', text: 'Philippines'},
                    {id: 'Poland', text: 'Poland'},
                    {id: 'Portugal', text: 'Portugal'},
                    {id: 'Russia', text: 'Russia'},
                    {id: 'Singapore', text: 'Singapore'},
                    {id: 'South Africa', text: 'South Africa'},
                    {id: 'Spain', text: 'Spain'},
                    {id: 'Sweden', text: 'Sweden'},
                    {id: 'Switzerland', text: 'Switzerland'},
                    {id: 'UK', text: 'UK'},
                    {id: 'USA', text: 'USA'}
                ]
            }
        ]
    },
    form: {
        groups: {name: 'countryGroup'}
    }
});
