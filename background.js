chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [{
        'id': 1,
        'priority': 1,
        'action': {
            'type': 'block'
        },
        'condition': {
            'urlFilter': '*.ultrasurfing.com',
            'resourceTypes': ['main_frame','media']
        }
    }],
    removeRuleIds: [1]
})