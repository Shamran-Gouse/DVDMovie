using Microsoft.EntityFrameworkCore.Migrations;

namespace DVDMovie.Migrations
{
    public partial class ImageToMovie2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
             migrationBuilder.AddColumn<string>(
                name: "Image",
                table: "Movies",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
             migrationBuilder.DropColumn(
                name: "Image",
                table: "Movies");
        }
    }
}
