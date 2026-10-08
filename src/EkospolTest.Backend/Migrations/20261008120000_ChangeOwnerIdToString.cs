using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EkospolTest.Backend.Migrations
{
    /// <inheritdoc />
    public partial class ChangeOwnerIdToString : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "owner_id",
                table: "phone_numbers",
                type: "character varying(255)",
                maxLength: 255,
                nullable: false,
                oldClrType: typeof(int),
                oldType: "integer");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            // PostgreSQL cannot cast varchar to integer implicitly; Keycloak user ids are not numeric, so they become 0.
            migrationBuilder.Sql(
                "ALTER TABLE phone_numbers ALTER COLUMN owner_id TYPE integer " +
                "USING CASE WHEN owner_id ~ '^[0-9]+$' THEN owner_id::integer ELSE 0 END;");
        }
    }
}
