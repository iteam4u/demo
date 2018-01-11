export function attr (item) {
    let prefix = '\n\t' + item.label,
        suffix = ''

    switch (typeof item.value) {
        case 'string':
            suffix = `="${item.value}"`; break;
        case 'boolean':
            item.value ? null : prefix = '';
    }

    return prefix + suffix;
}

export function attrs (items): string {

    let attrs = items.map(i => attr(i)).filter(i => !!i).join('');

    switch (items.length) {
        case 0: break;
        case 1:
            if (!attrs.trim()) break;
            if (attrs.length < 24) {
                attrs = ' ' + attrs.slice(2);
                break;
            }
        default: attrs = attrs + '\n'; break;
    }
    return attrs;
}
