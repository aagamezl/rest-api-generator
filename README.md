# REST API Generator Script

A Bash script for generating API resources and full applications with boilerplate files. The script is designed to simplify the process of setting up new domains or creating an entire application structure.

## Features

- Generate a new domain with boilerplate files.
- Generate a full application structure.
- Prevents overwriting existing files and directories.
- Provides a user-friendly usage message with options and examples.

## Usage

### Command Format

```bash
./api-generator.sh <option> <argument>
```

### Options

| Option | Description                                                                             | Argument          |
|--------|-----------------------------------------------------------------------------------------|-------------------|
| `-n`   | Generate a new full application. Requires the application name as an argument.         | `<app-name>`      |
| `-d`   | Generate a new domain directory with boilerplate files. Requires the domain path.      | `<domain-path>`   |

### Arguments

- `<app-name>`: The name of the new application to generate.
- `<domain-path>`: The filesystem path to the domain directory. Example: `src/domains/users`, where `users` is the domain name.

### Examples

#### Generate a New Application

```bash
./api-generator.sh -n my-app
```

#### Generate a New Domain

```bash
./api-generator.sh -d src/domains/profiles
```

## Output

### For `-n` (New Application)

Creates a new directory structure for your application, including essential files for a standard API setup.

### For `-d` (New Domain)

Generates the following files in the specified domain directory:

- `index.js`
- `<domain-name>.controller.js`
- `<domain-name>.model.js`
- `<domain-name>.routes.js`
- `<domain-name>.schema.js`
- `<domain-name>.validation.js`

## Prerequisites

- Bash (compatible with most Linux distributions and macOS).
- Proper permissions to create files and directories in the target location.

## Error Handling

The script checks for:

- Missing arguments and invalid options.
- Existing directories and files to avoid accidental overwrites.

## Contributing

Feel free to fork this repository and submit pull requests for improvements or new features.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
