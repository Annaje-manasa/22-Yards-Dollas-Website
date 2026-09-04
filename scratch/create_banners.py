import os
from PIL import Image, ImageDraw, ImageFont

# Dimensions 800x600 (4:3 aspect ratio)
W, H = 800, 600

# Color palette
NAVY = (10, 93, 166)
NAVY_DARK = (5, 58, 104)
YELLOW = (246, 201, 21)
WHITE = (255, 255, 255)
LIGHT_BLUE = (222, 235, 247)
SLATE = (91, 122, 148)

out_dir = r"c:\Users\ANNAJE MANASA\Downloads\new\src\assets"

def get_font(size):
    try:
        return ImageFont.truetype("arialbd.ttf", size)
    except:
        return ImageFont.load_default()

def get_font_regular(size):
    try:
        return ImageFont.truetype("arial.ttf", size)
    except:
        return ImageFont.load_default()

# Banner 1: Understanding the Game
img1 = Image.new("RGB", (W, H), NAVY_DARK)
draw1 = ImageDraw.Draw(img1)
# Background shapes
draw1.polygon([(0, 0), (W, 0), (W, 140), (0, 220)], fill=NAVY)
draw1.polygon([(0, 200), (W, 120), (W, 160), (0, 240)], fill=YELLOW)
draw1.polygon([(0, 480), (W, 400), (W, H), (0, H)], fill=NAVY)

# Badge
draw1.rounded_rectangle([40, 40, 360, 85], radius=10, fill=YELLOW)
draw1.text((55, 50), "22YARDS DALLAS ACADEMY", fill=NAVY_DARK, font=get_font(20))

# Main Title
draw1.text((40, 260), "TRAIN. GROW. ACHIEVE.", fill=YELLOW, font=get_font(42))
draw1.text((40, 320), "UNDERSTANDING THE GAME", fill=WHITE, font=get_font(34))
draw1.text((40, 375), "Building Cricket Fundamentals & Social Skills", fill=LIGHT_BLUE, font=get_font_regular(22))

# Bottom tag
draw1.rounded_rectangle([40, 440, 280, 485], radius=20, fill=YELLOW)
draw1.text((60, 452), "ENROLL NOW", fill=NAVY_DARK, font=get_font(20))

img1.save(os.path.join(out_dir, "understanding_game_banner.jpg"), quality=95)

# Banner 2: Personalized Attention
img2 = Image.new("RGB", (W, H), NAVY)
draw2 = ImageDraw.Draw(img2)
# Geometric slash accents
draw2.polygon([(0, 0), (350, 0), (250, H), (0, H)], fill=NAVY_DARK)
draw2.polygon([(340, 0), (370, 0), (270, H), (240, H)], fill=YELLOW)
draw2.polygon([(W-200, H-150), (W, H-250), (W, H), (W-100, H)], fill=YELLOW)

# Content
draw2.rounded_rectangle([50, 50, 420, 95], radius=10, fill=YELLOW)
draw2.text((65, 60), "CHAMPION MENTORSHIP", fill=NAVY_DARK, font=get_font(20))

draw2.text((50, 220), "PERSONALIZED ATTENTION", fill=WHITE, font=get_font(38))
draw2.text((50, 275), "TO EACH CHILD", fill=YELLOW, font=get_font(42))
draw2.text((50, 340), "Warm-ups • Batting • Bowling • Individual Assessments", fill=LIGHT_BLUE, font=get_font_regular(20))
draw2.text((50, 380), "Cultivating Discipline, Teamwork & Resilience", fill=WHITE, font=get_font_regular(20))

# Trophy badge
draw2.rounded_rectangle([50, 450, 330, 495], radius=22, fill=YELLOW)
draw2.text((70, 462), "1-ON-1 COACHING", fill=NAVY_DARK, font=get_font(20))

img2.save(os.path.join(out_dir, "personalized_attention_banner.jpg"), quality=95)

# Banner 3: Session Highlights
img3 = Image.new("RGB", (W, H), NAVY_DARK)
draw3 = ImageDraw.Draw(img3)
# Circle design accents
draw3.ellipse([W-300, -100, W+100, 300], fill=NAVY)
draw3.polygon([(0, H-200), (W, H-300), (W, H-270), (0, H-170)], fill=YELLOW)

draw3.rounded_rectangle([40, 40, 460, 90], radius=10, fill=YELLOW)
draw3.text((55, 52), "ATTENTION YOUNG CRICKET ASPIRANTS", fill=NAVY_DARK, font=get_font(19))

draw3.text((40, 180), "90-MINUTE INTERACTIVE", fill=WHITE, font=get_font(36))
draw3.text((40, 230), "SESSION HIGHLIGHTS", fill=YELLOW, font=get_font(40))

draw3.text((40, 300), "• 45 Mins Focused Technique Training", fill=LIGHT_BLUE, font=get_font_regular(22))
draw3.text((40, 340), "• 45 Mins Interactive Match Gameplay", fill=LIGHT_BLUE, font=get_font_regular(22))
draw3.text((40, 380), "• Taped Tennis & Synthetic Ball Programs", fill=LIGHT_BLUE, font=get_font_regular(22))

draw3.rounded_rectangle([40, 460, 380, 510], radius=25, fill=YELLOW)
draw3.text((60, 473), "SHAPING TOMORROW'S CHAMPIONS", fill=NAVY_DARK, font=get_font(18))

img3.save(os.path.join(out_dir, "session_highlights_banner.jpg"), quality=95)
print("All 3 custom graphic banner images generated successfully!")
