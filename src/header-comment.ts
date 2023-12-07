import ts from 'typescript';

export default function generateHeaderComment(): string {
    return [
        "",
        "\tThis code is automayicly generated, do not edit by hand.",
        "\tGenerated at: " + new Date().toJSON().replace('T', ' ').replace('Z', ''),
        "\tGenerated for: typescript@" + ts.version,
        "",
    ].join('\n');
}
